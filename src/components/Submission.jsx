// src/SubmissionInfo.js

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const markdown = `
# Submission Format
## Problemno-instaid1|instaid2|instaid3
# Photo Submission
# https://tinyurl.com/yps4yz3r
# Story Submission
# https://tinyurl.com/4p7r5s77
## Login Credentials
### PC=> user=student, password=itmb@123
## WIFI Credentials
### Name:ITMBU, Password:itmtl@123, Username:tbl , SElect itmbu.local
`;

const SubmissionInfo = () => {
  return (
    <div className="p-6 border rounded-lg shadow-lg bg-white max-w-4xl mx-auto mt-4">
      <ReactMarkdown 
        
        remarkPlugins={[remarkGfm]} 
        components={{
          h1: ({  ...props }) => <h1 className="text-3xl font-bold mt-4 mb-2" {...props} />,
          h2: ({  ...props }) => <h2 className="text-2xl font-semibold mt-4 mb-2" {...props} />,
          h3: ({  ...props }) => <h3 className="text-xl font-semibold mt-4 mb-2" {...props} />,
          p: ({  ...props }) => <p className="text-base mb-2" {...props} />,
          a: ({  ...props }) => <a className="text-blue-600 hover:underline" {...props} />
        }}
      >{markdown}</ReactMarkdown>
    </div>
  );
};

export default SubmissionInfo;
