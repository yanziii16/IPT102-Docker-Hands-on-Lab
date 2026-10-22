import { useState } from 'react';
import './App.css';

function App() {
  const [notes, setNotes] = useState([
    { id: 1, title: 'Docker Lab Checklist', content: 'Make sure docker-compose.yml and Dockerfiles are properly configured.', category: 'School' },
    { id: 2, title: 'Project Ideas', content: 'Build a full-stack containerized application with React and .NET.', category: 'Development' }
  ]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('School');
  const [search, setSearch] = useState('');

  const addNote = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    const newNote = {
      id: Date.now(),
      title,
      content,
      category
    };
    setNotes([newNote, ...notes]);
    setTitle('');
    setContent('');
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const filteredNotes = notes.filter(note => 
    note.title.toLowerCase().includes(search.toLowerCase()) ||
    note.content.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: '#090d16', color: '#f1f5f9', minHeight: '100vh', padding: '40px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ maxWidth: '700px', width: '100%' }}>
        
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <div>
            <h1 style={{ fontSize: '2rem', margin: '0 0 4px 0', background: 'linear-gradient(to right, #60a5fa, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>NotesApp Pro</h1>
            <p style={{ color: '#94a3b8', margin: 0, fontSize: '0.95rem' }}>Your thoughts, ideas, and tasks—neatly organized.</p>
          </div>
          <span style={{ backgroundColor: '#1e293b', color: '#38bdf8', padding: '6px 12px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600', border: '1px solid #334155' }}>
            {notes.length} Notes
          </span>
        </div>

        {/* Search Bar */}
        <div style={{ marginBottom: '20px' }}>
          <input 
            type="text"
            placeholder="Search notes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ width: '100%', backgroundColor: '#111827', color: '#fff', border: '1px solid #374151', borderRadius: '10px', padding: '12px 16px', outline: 'none', fontSize: '0.95rem', boxSizing: 'border-box' }}
          />
        </div>

        {/* Form */}
        <form onSubmit={addNote} style={{ backgroundColor: '#111827', padding: '24px', borderRadius: '14px', border: '1px solid #1f2937', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.5)', marginBottom: '32px' }}>
          <h3 style={{ margin: '0 0 16px 0', fontSize: '1.1rem', color: '#e2e8f0' }}>Create a New Note</h3>
          <div style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
            <input 
              type="text"
              placeholder="Note title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{ flex: 2, backgroundColor: '#030712', color: '#fff', border: '1px solid #374151', borderRadius: '8px', padding: '10px 14px', outline: 'none' }}
            />
            <select 
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              style={{ flex: 1, backgroundColor: '#030712', color: '#fff', border: '1px solid #374151', borderRadius: '8px', padding: '10px 14px', outline: 'none' }}
            >
              <option value="School">School</option>
              <option value="Development">Development</option>
              <option value="Personal">Personal</option>
            </select>
          </div>
          <textarea 
            placeholder="Write your note content here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows="3"
            style={{ width: '100%', backgroundColor: '#030712', color: '#fff', border: '1px solid #374151', borderRadius: '8px', padding: '12px 14px', outline: 'none', resize: 'none', marginBottom: '16px', boxSizing: 'border-box' }}
          />
          <button type="submit" style={{ width: '100%', backgroundColor: '#2563eb', color: '#fff', border: 'none', padding: '12px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '0.95rem', transition: 'background 0.2s' }}>
            Add Note
          </button>
        </form>

        {/* Notes Grid */}
        <h3 style={{ borderBottom: '1px solid #1f2937', paddingBottom: '8px', marginBottom: '16px', fontSize: '1.1rem', color: '#e2e8f0' }}>Saved Notes</h3>
        
        {filteredNotes.length === 0 ? (
          <p style={{ color: '#64748b', textAlign: 'center', padding: '20px' }}>No notes found.</p>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px' }}>
            {filteredNotes.map(note => (
              <div key={note.id} style={{ backgroundColor: '#111827', padding: '20px', borderRadius: '12px', border: '1px solid #1f2937', position: 'relative', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <h4 style={{ margin: 0, fontSize: '1.1rem', color: '#f8fafc' }}>{note.title}</h4>
                  <span style={{ fontSize: '0.75rem', padding: '4px 8px', borderRadius: '6px', backgroundColor: note.category === 'School' ? '#1e3a8a' : note.category === 'Development' ? '#065f46' : '#581c87', color: '#fff' }}>
                    {note.category}
                  </span>
                </div>
                <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.5' }}>{note.content}</p>
                <button 
                  onClick={() => deleteNote(note.id)}
                  style={{ alignSelf: 'flex-end', backgroundColor: 'transparent', color: '#ef4444', border: 'none', cursor: 'pointer', fontSize: '0.85rem', marginTop: '8px', fontWeight: '600' }}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}

export default App;