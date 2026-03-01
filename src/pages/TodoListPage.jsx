import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import { TodoForm } from '../components/TodoForm';
import { TodoItem } from '../components/TodoItem';

const API_BASE = 'http://localhost:5000/api/todos';

export const TodoListPage = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { token } = useContext(AuthContext);

  const fetchTodos = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(API_BASE, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTodos(response.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Error fetching todos');
    } finally {
      setLoading(false);
    }
  };

  // Fetch todos using useEffect
  useEffect(() => {
    if (token) {
      fetchTodos();
    }
  }, [token]);

  return (
    <div style={{ maxWidth: '600px', margin: '20px auto', padding: '20px' }}>
      <h1>My Todos</h1>
      <TodoForm onTodoCreated={fetchTodos} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {loading && <p>Loading todos...</p>}
      <div>
        {todos.length === 0 && !loading ? (
          <p>No todos yet. Create one!</p>
        ) : (
          todos.map((todo) => (
            <TodoItem
              key={todo._id}
              todo={todo}
              onDeleted={fetchTodos}
              onUpdated={fetchTodos}
            />
          ))
        )}
      </div>
    </div>
  );
};
