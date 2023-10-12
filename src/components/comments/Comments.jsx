import { useState } from "react";
import "./comments.scss";

const Comments = () => {

  //Temporary dummy
  const comments = [
    {
      id: 1,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      name: "John Doe",
      userId: 1,
      profilePicture:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
      name: "Jane Doe",
      userId: 2,
      profilePicture:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];

  // // Function to truncate text and add an ellipsis
  // const handleShortText = (text, maxSentences) => {
  //   const [expandedComments, setExpandedComments] = useState([]);

  //   const sentences = text.split(". ");
  //   const truncatedText = sentences.slice(0, maxSentences).join('. ');

  //   if(sentences.length  > maxSentences){
  //     return truncatedText  + "... ";
  //   } else {
  //     return truncatedText ;
  //   }
  // }
  // // TO Expand Comment
  // const toggleExpand = (commentId) => {
  //   if (expandedComments.include(commentId)){
  //     setExpandedComments(expandedComments.filter(id => id !== commentId))
  //   } else {
  //     setExpandedComments([...expandedComments, commentId])
  //   }
  // }

  // const isExpanded = (commentId) => {
  //   return expandedComments.includes(commentId);
  // }
  return (
    <div className="comments">
      {comments.map((comment) => (
        <div className="comment" key={comment.id}>
          <img src={comment.profilePicture} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
            {/* <p>{handleShortText(comment.desc, 4)}</p> */}
            {/* <p> {isExpanded(comment.id) ? comment.desc : handleShortText(comment.desc, )}</p> */}
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
