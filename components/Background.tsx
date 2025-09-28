import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-white dark:bg-gray-900">
        <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-purple-300 dark:bg-purple-800 rounded-full filter blur-3xl opacity-40 dark:opacity-20 animate-[spin_20s_linear_infinite]"></div>
        <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-teal-300 dark:bg-teal-800 rounded-full filter blur-3xl opacity-40 dark:opacity-20 animate-[spin_30s_linear_infinite_reverse]"></div>
        <div className="absolute top-[20%] right-[20%] w-60 h-60 bg-pink-300 dark:bg-pink-800 rounded-full filter blur-3xl opacity-30 dark:opacity-10 animate-[spin_25s_linear_infinite]"></div>
        <div className="absolute bottom-[25%] left-[20%] w-52 h-52 bg-yellow-300 dark:bg-yellow-800 rounded-full filter blur-3xl opacity-30 dark:opacity-10 animate-[spin_35s_linear_infinite_reverse]"></div>
      </div>
    </div>
  );
};

export default Background;
