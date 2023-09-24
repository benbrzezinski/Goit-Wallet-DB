import jwt from 'jsonwebtoken';
import { nanoid } from 'nanoid';
import service from '../services/users.js';
import sendMail from '../utils/sendMail.js';
import { passwordHashBcrypt, passwordCompareBcrypt } from '../utils/bcrypt.js';
import {
  userRegisterSchema,
  userLoginSchema,
  userLogoutSchema,
  userReverifySchema,
} from '../utils/validation.js';
import { handleValidationError } from '../utils/handleErrors.js';

const register = async (req, res, next) => {
  try {
    await userRegisterSchema.validateAsync(req.body);
    const { body } = req;
    const { email, password } = body;

    const isUserExists = await service.getUser({ email });

    if (isUserExists) {
      return res.status(409).json({
        status: 409,
        statusText: 'Conflict',
        result: {
          message: 'E-mail is already in use',
        },
      });
    }

    const user = await service.createUser(body);

    user.set('verificationToken', nanoid());
    user.set('password', await passwordHashBcrypt(password));

    await user.save();
    const verificationToken = user.get('verificationToken');
    await sendMail(email, verificationToken);

    res.status(201).json({
      status: 201,
      statusText: 'Created',
      result: {
        user: {
          email: user.email,
          verify: user.verify,
        },
        message:
          'Verify your e-mail address. The message has been sent to your e-mail, if you do not see your message, please check SPAM or try again',
      },
    });
  } catch (err) {
    handleValidationError(err, res, next);
  }
};

const login = async (req, res, next) => {
  try {
    await userLoginSchema.validateAsync(req.body);
    const { email, password } = req.body;
    const existingUser = await service.getUser({ email });

    if (
      !existingUser ||
      !(await passwordCompareBcrypt(password, existingUser.password))
    ) {
      return res.status(401).json({
        status: 401,
        statusText: 'Unauthorized',
        result: { message: 'Incorrect e-mail or password' },
      });
    }

    if (!existingUser.verify) {
      return res.status(400).json({
        status: 400,
        statusText: 'Bad Request',
        result: { message: 'E-mail is not verified' },
      });
    }

    const payload = {
      id: existingUser._id,
    };

    const token = jwt.sign(payload, process.env.AUTH_KEY, {
      expiresIn: '1h',
    });

    const user = await service.updateUser({ email }, { token });

    res.json({
      status: 200,
      statusText: 'OK',
      result: {
        token,
        user: {
          email: user.email,
          username: user.username,
        },
      },
    });
  } catch (err) {
    handleValidationError(err, res, next);
  }
};

const logout = async (req, res, next) => {
  try {
    await userLogoutSchema.validateAsync(req.body);
    const { _id } = req.user;
    await service.updateUser({ _id }, { token: null });
    res.status(204).end();
  } catch (err) {
    handleValidationError(err, res, next);
  }
};

const getCurrent = async (req, res, next) => {
  try {
    const { _id } = req.user;
    const user = await service.getUser({ _id });

    res.json({
      status: 200,
      statusText: 'OK',
      result: {
        user: {
          email: user.email,
          username: user.username,
        },
      },
    });
  } catch (err) {
    next(err);
  }
};

const verifyEmail = async (req, res, next) => {
  try {
    const { verificationToken } = req.params;
    const user = await service.updateUser(
      { verificationToken },
      {
        verify: true,
        verificationToken: null,
      }
    );

    if (!user) {
      return res.status(404).json({
        status: 404,
        statusText: 'Not Found',
        result: {
          message:
            'Verification unsuccessful, user was not found or has already been passed',
        },
      });
    }

    res.json({
      status: 200,
      statusText: 'OK',
      result: {
        user: {
          email: user.email,
          verify: user.verify,
        },
        message: 'Verification successful',
      },
    });
  } catch (err) {
    next(err);
  }
};

const reverifyEmail = async (req, res, next) => {
  try {
    await userReverifySchema.validateAsync(req.body);
    const { email } = req.body;
    const user = await service.getUser({ email });

    if (!user) {
      return res.status(404).json({
        status: 404,
        statusText: 'Not Found',
        result: { message: 'Verification unsuccessful, user not found' },
      });
    }

    if (user.verify) {
      return res.status(400).json({
        status: 400,
        statusText: 'Bad Request',
        result: { message: 'Verification has already been passed' },
      });
    }

    await sendMail(email, user.verificationToken);

    res.json({
      status: 200,
      statusText: 'OK',
      result: {
        user: {
          email,
        },
        message:
          'The message has been sent to your e-mail, if you do not see your message, please check SPAM or try again. If you are still having trouble receiving the verification e-mail, you may need to check your antivirus settings, because it can blocking the outgoing e-mail traffic',
      },
    });
  } catch (err) {
    handleValidationError(err, res, next);
  }
};

const usersController = {
  register,
  login,
  logout,
  getCurrent,
  verifyEmail,
  reverifyEmail,
};

export default usersController;
