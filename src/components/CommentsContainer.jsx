const CommentsContainer = () => {
  const commentsData = [
    {
      name: "Comment down",
      text: "Lorem ipsum",
      replies: [
        {
          name: "Comment down earth",
          text: "Lorem Ipsum",
          replies: [
            {
              name: "Comment down lorem",
              text: "Lorem Ipsum",
              replies: [
                {
                  name: "Comment down earth",
                  text: "Lorem Ipsum",
                  replies: [
                    {
                      name: "Comment down earth",
                      text: "Lorem Ipsum",
                      replies: [
                        {
                          name: "Comment down earth",
                          text: "Lorem Ipsum"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Akshay Saini",
      text: "Lorem ipsum"
    },
    {
      name: "Akshay Saini",
      text: "Lorem ipsum"
    }
  ];

  const Comment = ({ data }) => {
    const { name, text, replies } = data;
    return (
      <div className='flex shadow-sm bg-gray-100 p-2 rounded my-2'>
        <img
          className='w-12 h-12'
          alt='user'
          src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'
        />
        <div className='px-3'>
          <p className='font-bold'>{name}</p>
          <p>{text}</p>
        </div>
      </div>
    );
  };

  const CommentsList = ({ comments }) => {
    // Disclaimer: Don't use indexes as keys
    return comments?.map((comment, index) => (
      <div key={index}>
        <Comment data={comment} />
        <div className='pl-5 border-l-2 border-l-black ml-5'>
          {/* <Comment key={index} data={comment} />
          <Comment key={index} data={comment} />*/}
          <CommentsList comments={comment.replies} />
        </div>
      </div>
    ));
  };

  return (
    <div className='m-5 p-2'>
      <h1 className='text-2xl font-bold'>Comments:</h1>
      {/* <Comment data={commentsData[0]} /> */}
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
