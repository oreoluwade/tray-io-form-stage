const initialState = {
  form: {
    selectedTab: 'User',
    data: {
      user: {
        name: '',
        email: '',
        role: '',
        password: ''
      },

      privacy: {
        receiveProductUpdates: false,
        receiveCommunicationUpdates: false
      }
    }
  }
};

export default initialState;
