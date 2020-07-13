import React, { 
    useState,
    useEffect,
    useMemo,
    useCallback,
    useRef,
    useContext,
    useImperativeHandle,
    useReducer
  } from 'react';

interface User {
  name: string;
  login: string;
  avatar_url: string;
}

const App: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [users, setUsers] = useState<[User]>();

  const names = useMemo(() => {
    return users?.map(user => user.name).join(', ')
  }, [users]);

  const greetings = useCallback((user: User) => {
    return alert(`Hello ${user.name}`)
  }, []);

  function focusOnInput () {
    console.log(inputRef.current?.focus());
  }

  return (
    <form action="">
      <input type="text" ref={inputRef} />
    </form>
  );
}

export default App;
