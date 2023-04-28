import React, { useEffect, useState } from "react";

function QuestionList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4001/questions")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.prompt}

            <ul>
              {item.answers.map((answer, index) => (
                <li key={index}>{answer}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
