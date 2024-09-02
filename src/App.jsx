import React, { useState, useEffect } from 'react';
import QuestionList from './QuestionList';
import SearchBar from './SearchBar';
import './prism.css'; // Adjust the path if necessary

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchTopic, setSearchTopic] = useState('');
  const [searchDate, setSearchDate] = useState('');
  const [codingQuestions, setCodingQuestions] = useState([]);

  useEffect(() => {
    fetch('/data/questions.json')
      .then(response => response.json())
      .then(data => setCodingQuestions(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const filteredQuestions = codingQuestions.filter(question => {
    const termMatch = question.question.toLowerCase().includes(searchTerm.toLowerCase());
    const topicMatch = question.topic.toLowerCase().includes(searchTopic.toLowerCase());
    const dateMatch = question.date.includes(searchDate);

    return termMatch && topicMatch && dateMatch;
  });

  return (
    <div className="App">
      <h1>Coding Questions</h1>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        searchTopic={searchTopic}
        setSearchTopic={setSearchTopic}
        searchDate={searchDate}
        setSearchDate={setSearchDate}
      />
      <QuestionList questions={filteredQuestions} />
    </div>
  );
}

export default App;
