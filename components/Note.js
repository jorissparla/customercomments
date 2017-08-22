import React from 'react';
import glamorous from 'glamorous';
import moment from 'moment';
import Clear from 'material-ui/svg-icons/content/clear';

const Row = glamorous.div({
  display: 'flex',
  flexDirection: 'row',
  padding: 5,
  borderBottomStyle: 'solid',
  borderBottomColor: 'lightgrey',
  borderBottomWidth: 'thin',
  alignContent: 'center',
  justifyContent: 'space-between',
  '&::before': {
    //content: `''`,
    position: 'relative',
    top: 15,
    left: -40,
    width: 20,
    padding: 1,
    height: 20,
    border: '3px solid grey',
    backgroundColor: 'papayawhip',
    borderRadius: '50%'
  }
});

const DateBox = glamorous.div({
  display: 'flex',
  background: 'rgba(38,138,210,0.75)',
  flexDirection: 'column',
  color: 'white',
  border: 'solid',
  borderRadius: 10,
  height: 64,
  justifyContent: 'center',
  alignItems: 'center',
  padding: 3,
  width: '5%',
  minWidth: 70,
  boxShadow: '2px 2px 2px 0px rgba(0,0,0,0.75)',

  fontFamily: 'Roboto',
  fontSize: 18
});

const DateNumber = glamorous.div({
  display: 'flex',
  background: '#01579B',
  flexDirection: 'column',
  color: 'white',
  border: 'solid',
  borderRadius: '50%',
  height: 48,
  justifyContent: 'center',
  alignItems: 'center',
  padding: 3,
  minWidth: 50,
  fontFamily: 'Roboto',
  fontSize: 18,
  fontWeight: 'bold'
});

const TextBox = glamorous.div({
  display: 'flex',
  width: '75%',
  marginLeft: 10,
  fontFamily: 'Verdana'
});

const DeleteIcon = glamorous(Clear)({
  padding: 5
});

const JustABox = glamorous.div({
  display: 'flex',
  boxShadow: '2px 2px 2px 0px rgba(0,0,0,0.75)',
  width: 10
});

const { Div } = glamorous;
export default ({ note: { note, id, date }, onDelete }) => {
  const fmtDate = moment(date).format('DD');
  return (
    <Row>
      <DateNumber>
        {fmtDate}
      </DateNumber>
      <TextBox>
        {note || 'No Update'}
      </TextBox>
      <DeleteIcon onClick={() => onDelete(id)} />
    </Row>
  );
};
