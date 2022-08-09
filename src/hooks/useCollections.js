import { collection } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../config/config';

export const useCollection = (targetCollection) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ref = collection(db, targetCollection);


  }, []);
};
