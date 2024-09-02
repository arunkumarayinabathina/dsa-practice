import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

function QuestionList({ questions }) {
    // Sort questions by date in descending order
    const sortedQuestions = [...questions].sort((a, b) => new Date(b.date) - new Date(a.date));

    return (
        <div className="question-list">
            {sortedQuestions.length > 0 ? (
                sortedQuestions.map((q) => (
                    <div key={q.id} className="question-card">
                        <h3>{q.question}</h3>
                        <h4 className="section-heading">Code:</h4>
                        <SyntaxHighlighter language="python" style={tomorrow}>
                            {q.code}
                        </SyntaxHighlighter>
                        <h4 className="section-heading">Output:</h4>
                        <pre className="question-output">{q.output}</pre>
                        <p className="question-date">Date: {q.date}</p>
                        <p className="question-date">Topic: {q.topic}</p>
                    </div>
                ))
            ) : (
                <p className="no-questions">No questions found.</p>
            )}
        </div>
    );
}

export default QuestionList;
