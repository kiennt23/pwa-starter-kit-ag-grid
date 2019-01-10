export const OPEN_DIALOG = 'OPEN_DIALOG';
export const CLOSE_DIALOG = 'CLOSE_DIALOG';

export const openDialog = ({dialogData}) => {
  return {
    type: OPEN_DIALOG,
    dialogData
  };
};

export const closeDialog = () => {
  return {
    type: CLOSE_DIALOG
  };
};