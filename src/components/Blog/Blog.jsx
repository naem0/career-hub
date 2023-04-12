import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="my-8">
                <h1 className='text-3xl font-semibold my-4'>
                    When should you use context API?
                </h1>
                <p>It can be useful in situations where multiple components need to access the same data or where you want to avoid prop drilling. Here are some scenarios in which you might want to use the Context API:</p>
                <p>Global data management: If you have data that needs to be shared across the entire application, you can use the Context API to manage that data.</p>
                <p>Theming: If you want to implement a theming feature in your application where users can switch between light and dark mode, you can use the Context API to store the current theme and provide it to all the components.</p>
            </div>
            <div className="my-8">
                <h1 className='text-3xl font-semibold my-4'>
                What is a custom hook?
                </h1>
                <p>A custom hook is a JavaScript function that starts with the prefix "use" and allows you to extract component logic into reusable functions. Custom hooks can be used to share stateful logic between components or to abstract complex logic into simpler, more manageable code.  However, custom hooks can be created to encapsulate any piece of logic that is reusable across multiple components.</p>
            </div>
            <div className=" my-8">
                <h1 className='text-3xl font-semibold my-4'>
                What is useRef?
                </h1>
                <p>In React, useRef is a hook that provides a way to create a mutable reference that persists across component renders. The useRef hook returns a plain JavaScript object with a current property that can be set and read.</p>
            </div>
            <div className=" my-8">
                <h1 className='text-3xl font-semibold my-4'>
                What is useMemo?
                </h1>
                <p>In React, useMemo is a hook that allows you to memoize the result of a function and only recompute the result when one of its dependencies has changed. This can help improve performance by reducing unnecessary re-computations of expensive operations.</p>
            </div>
        </div>
    );
};

export default Blog;