import React, { useState } from 'react';
import QuestionList from './QuestionList';
import SearchBar from './SearchBar';
import './prism.css'; // Adjust the path if necessary

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchTopic, setSearchTopic] = useState('');
  const [searchDate, setSearchDate] = useState('');

  const codingQuestions = [
      {
        id: 1,
        question: "Find the largest of array?",
        code: `def Findlarge(arr):
        large = 0
        for i in arr:
            if large<i:
                large = i
        return large
    
    arr = [1,2,3,5,7,9]
    print(Findlarge(arr))
    `,
        output: "9",
        date: "2024-09-01",
        topic: "Array"  // Added topic
      },
      {
        id: 2,
        question: "Find the second largest element?",
        code: `def Secondlarge(arr):
        large = 0
        secondLarge = 0
        for i in arr:
            if large<i:
                secondLarge = large
                large = i
        return secondLarge
    
    arr = [1,2,3,5,7,9]
    print(Secondlarge(arr))
    `,
        output: "7",
        date: "2024-09-01",
        topic: "Array"  // Added topic
      },
    ];
    

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
