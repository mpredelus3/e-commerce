import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Get existing users or initialize empty array
    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Check if user already exists
    if (existingUsers.some(user => user.email === formData.email)) {
      setError('Email already registered');
      return;
    }

    // Add new user
    const newUser = {
      username: formData.username,
      email: formData.email,
      password: formData.password // In a real app, never store plain text passwords!
    };

    localStorage.setItem('users', JSON.stringify([...existingUsers, newUser]));
    alert('Signup successful! Please login.');
    navigate('/login');
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        {error && <div style={styles.error}>{error}</div>}
        <input 
          type="text" 
          name="username"
          placeholder="Username" 
          style={styles.input}
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input 
          type="email" 
          name="email"
          placeholder="Email" 
          style={styles.input}
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input 
          type="password" 
          name="password"
          placeholder="Password" 
          style={styles.input}
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input 
          type="password" 
          name="confirmPassword"
          placeholder="Confirm Password" 
          style={styles.input}
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        <button style={styles.button}>Sign Up</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    padding: '2rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '100%',
    maxWidth: '400px',
    padding: '2rem',
    border: '1px solid #ddd',
    borderRadius: '8px',
  },
  input: {
    padding: '0.5rem',
    fontSize: '1rem',
    borderRadius: '4px',
    border: '1px solid #ddd',
  },
  button: {
    backgroundColor: '#333',
    color: 'white',
    border: 'none',
    padding: '0.5rem',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    fontSize: '0.9rem',
    textAlign: 'center',
  }
};

export default Signup;
