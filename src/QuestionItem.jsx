import React from 'react';

function QuestionItem({ question }) {
  return (
    <div>
      <h3>{question.question}</h3>
      <pre>{question.code}</pre>
      <p>{question.output}</p>
      <hr />
    </div>
  );
}

export default QuestionItem;
