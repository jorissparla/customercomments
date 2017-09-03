import glamorous from 'glamorous';

export const Input = glamorous.input({
  marginTop: 10,
  marginRight: 10,
  fontFamily: 'Roboto',
  fontSize: 16,
  display: 'flex',
  width: '20%',
  minWidth: 200,
  height: 34,
  padding: '6px 12px',
  lineHeight: 1.42857143,
  color: '#555',
  backgroundColor: '#fff',
  border: '1px solid #ccc',
  borderRadius: 4,
  boxShadow: 'inset 0 1px 1px rgba(0, 0, 0, .075)'
});

export const Row = glamorous.div({
  display: 'flex',
  flexDirection: 'row',
  padding: 5,
  borderBottomStyle: 'dotted',
  borderBottomColor: 'lightgrey',
  borderBottomWidth: 'thin',
  alignContent: 'center',
  '&::before': {
    position: 'relative',
    top: 15,
    left: 40,
    width: 20,
    padding: 1,
    height: 20,
    border: '3px solid grey',
    backgroundColor: 'papayawhip',
    borderRadius: '50%'
  }
});

export const Form = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  padding: 15,
  marginLeft: 30,
  boxshadow: '0px 0px 10px black'
});

export const Button = glamorous.div({
  width: '20%',
  minWidth: 200,
  padding: 10,
  margin: '10px 0px 10px 0px',
  background: '#21a957',
  fontFamily: 'Open Sans',
  color: '#ececec',
  boxshadow: 'inset 0px 0px 10px #666464',
  fontsize: 20,
  outline: 'none',
  border: 'none',
  cursor: 'pointer',
  fontWeight: 500,
  borderRadius: 5,
  transition: '0.5s',
  textTransform: 'uppercase'
});

export const ErrorText = glamorous.h3({
  fontWeight: 200,
  fontFamily: 'Roboto',
  color: 'palevioletred'
});
