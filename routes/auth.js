// routes/auth.js
import express from 'express';
import jwt from 'jsonwebtoken';

const router = express.Router();

// Проверка авторизации
router.get('/check', (req, res) => {
  const token = req.cookies.token; 
  

  if (!token) {
    return res.status(401).json({ isAuthenticated: false });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'MasterMarian');
    
    res.json({
      isAuthenticated: true,
      user: {
        id: decoded.id,
        name: decoded.name,
        role: decoded.role,
        email: decoded.email,
      },
      
    });
  } catch (err) {
    res.clearCookie('token'); 
    console.log(err.message)
    res.status(401).json({isAuthenticated: false });
  }
});

export default router;