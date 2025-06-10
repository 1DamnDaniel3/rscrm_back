import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import dotenv from 'dotenv'
import { UserAccount, UserProfile } from '../../db/index.js';

dotenv.config();

export class LoginController {
    constructor() {
        this.JWT_SECRET = process.env.JWT_SECRET || null;
        this.JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1h';
    }

    async userLogin(req, res) {

        try {
            const { email, password } = req.body;
            const user = await UserAccount.findOne({ where: { email }, include: [{model: UserProfile}] });
            if (!user) {
                return res.status(404).json({ message: "Пользователь с таким email не найден" })
            }
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                return res.status(401).json({ message: "Неверный пароль" })

            }
            const token = jwt.sign(
                {
                    id: user.id,
                    name: user.name,
                    role: user.role,
                    email: user.email,
                    school_id: user.school_id,
                },
                this.JWT_SECRET,
                { expiresIn: this.JWT_EXPIRES_IN }
            );
            res.cookie('token', token, {
                httpOnly: true,
                maxAge: 18000000,
                secure: process.env.NODE_ENV === 'production'
            });

            return res.status(200).json({
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                    school_id: user.school_id,
                    profile: user.UserProfile.id

                },
                expiresIn: this.JWT_EXPIRES_IN
            })
        } catch (error) {
            res.status(500).json({ message: "Internal Server Error", error: error.message })
        }
    }


    async userLogout(req, res) {
        try {
            res.clearCookie('token', {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                path: '/'
            });

            return res.status(200).json({
                success: true,
                message: 'Logged out successfully'
            });

        } catch (error) {
            console.error('Logout error:', error);
            return res.status(500).json({
                success: false,
                message: 'Logout failed',
                error: error.message
            });
        }
    }


}

export const loginController = new LoginController;