const newHead = (head) => {
  console.log(head);
  return {
    type: "NEW_HEAD",
    payload: head,
  };
};

export { newHead };
