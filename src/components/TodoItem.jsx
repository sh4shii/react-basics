import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';

export const TodoItem = ({ todo, onDeleted, onUpdated }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);
  const [completed, setCompleted] = useState(todo.completed);
  const [loading, setLoading] = useState(false);
  const { token } = useContext(AuthContext);

  const handleUpdate = async () => {
    setLoading(true);
    try {
      await axios.put(`http://localhost:5000/api/todos/${todo._id}`,
        { title, description, completed },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setIsEditing(false);
      onUpdated();
    } catch (err) {
      console.error('Error updating todo');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm('Are you sure?')) return;
    setLoading(true);
    try {
      await axios.delete(`http://localhost:5000/api/todos/${todo._id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      onDeleted();
    } catch (err) {
      console.error('Error deleting todo');
    } finally {
      setLoading(false);
    }
  };

  if (isEditing) {
    return (
      <div style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px' }}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ width: '100%', padding: '8px', marginBottom: '10px', boxSizing: 'border-box' }}
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ width: '100%', padding: '8px', marginBottom: '10px', boxSizing: 'border-box' }}
        />
        <label style={{ marginBottom: '10px' }}>
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
          />
          {' '}Completed
        </label>
        <div style={{ marginTop: '10px' }}>
          <button onClick={handleUpdate} disabled={loading} style={{ marginRight: '5px', padding: '8px 16px' }}>
            Save
          </button>
          <button onClick={() => setIsEditing(false)} style={{ padding: '8px 16px' }}>
            Cancel
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px' }}>
      <h3 style={{ textDecoration: completed ? 'line-through' : 'none', margin: '0 0 8px 0' }}>{title}</h3>
      <p style={{ margin: '0 0 8px 0' }}>{description}</p>
      <p style={{ margin: '0 0 10px 0' }}>Status: {completed ? '✓ Completed' : 'Pending'}</p>
      <button onClick={() => setIsEditing(true)} style={{ marginRight: '5px', padding: '8px 16px' }}>
        Edit
      </button>
      <button onClick={handleDelete} disabled={loading} style={{ padding: '8px 16px', color: 'red' }}>
        Delete
      </button>
    </div>
  );
};
