import React, { useRef, useImperativeHandle } from 'react';

import Form, { FormRef } from './Form';

const AppHandle: React.FC = () => {
  const formRef = useRef<FormRef>(null);
  
  return (
    <Form ref={formRef} />
  );
}

export default AppHandle;