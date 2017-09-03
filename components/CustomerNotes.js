import React from 'react';
import Paper from 'material-ui/Paper';
import Note from './Note';
import TextField from 'material-ui/TextField';
import moment from 'moment';
import glamorous, { H1 } from 'glamorous';
import DatePicker from 'material-ui/DatePicker';
import { withState } from 'recompose';

console.log('notes');

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

const TextBox1 = glamorous(TextField)({
  display: 'flex',
  width: '500px',
  marginLeft: 80,
  fontFamily: 'Verdana'
});
const TextBox = glamorous.textarea({
  display: 'flex',
  width: '100%',
  marginLeft: 10,
  resize: 'none',
  fontFamily: 'Roboto',
  fontSize: 14,
  boxSizing: 'border-box',
  border: '2px solid #ccc',
  borderRadius: 5,
  transition: '0.5s',
  fontFamily: 'Verdana',
  '&:focus': {
    border: '2px solid #555'
  }
});

const Row = glamorous.div({
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
    left: -40,
    width: 20,
    padding: 1,
    height: 20,
    border: '3px solid grey',
    backgroundColor: 'papayawhip',
    borderRadius: '50%'
  }
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
  fontWeight: 'bold',
  marginRight: 50
});

const MonthTitle = glamorous.h1({
  display: 'flex',
  borderBottomStyle: 'dotted',
  borderBottomColor: 'lightgrey',
  borderBottomWidth: 'thin'
});

const UL = glamorous.ul({
  paddingTop: 30
});

const Input = glamorous.input({
  fontFamily: 'Roboto',
  display: 'flex',
  width: '20%',
  height: 34,
  padding: '6px 12px',
  fontSize: 14,
  lineHeight: 1.42857143,
  color: '#555',
  backgroundColor: '#fff',
  border: '1px solid #ccc',
  borderRadius: 4,
  boxShadow: 'inset 0 1px 1px rgba(0, 0, 0, .075)'
});

const enhance = withState('searchText', 'setSearchText', '');
//const Index = enhance(({ searchText, setSearchText }) =>
export default class CustomerNotes extends React.Component {
  state = {
    dateValue: moment().format('DD-MMM-YYYY'),
    textValue: '',
    changeDateFieldvisible: false
  };
  defaultProps = {};
  onChangeDate = (a, v) => {
    this.setState({ dateValue: a.target.value });
  };

  onDelete = id => {
    this.props.onDelete({ id });
  };

  onKeyPress = v => {
    //v.preventDefault();
    if (v.key === 'Enter') {
      this.props.onAdd({
        note: this.state.textValue,
        date: this.state.dateValue
      });
      this.setState({ textValue: '' });
    }
  };
  onChangeText = v => {
    this.setState({ textValue: v.target.value });
  };

  sortAndReturnMonthNames = notes => {
    return notes
      .reduce((res, note) => {
        let m = moment(note.date).format('MMMM');
        let n = parseInt(moment(note.date).format('M'));
        let newObj = res.find(o => o.name === m);
        if (!newObj) res.push({ name: m, number: n });
        return res;
      }, [])
      .sort((a, b) => {
        if (a.number > b.number) {
          return -1;
        } else return 1;
      })
      .map(item => item.name);
  };

  render() {
    const { notes } = this.props;
    const months = this.sortAndReturnMonthNames(notes);
    console.log(months);
    return (
      <Paper>
        <UL>
          <MonthTitle>
            {moment().format('MMMM')}
          </MonthTitle>
          <Row>
            {this.state.changeDateFieldvisible &&
              <Input
                autoOk={true}
                value={this.state.dateValue}
                onChange={this.onChangeDate}
              />}
          </Row>
          <Row>
            <DateNumber
              value={this.state.dateValue}
              onChange={this.onChangeDate}
              onClick={() =>
                this.setState({
                  changeDateFieldvisible: !this.state.changeDateFieldvisible
                })}
            >
              {moment(this.state.dateValue).format('DD')}
            </DateNumber>

            <TextBox
              multiLine={true}
              underlineShow={false}
              floatingLabelText="Update text, press Enter to add"
              name="note"
              value={this.state.textValue}
              onChange={this.onChangeText}
              onKeyPress={this.onKeyPress}
            />
          </Row>
          {months.map(month => {
            return (
              <div key={month}>
                <MonthTitle>
                  {month}
                </MonthTitle>
                {notes
                  .filter(note => moment(note.date).format('MMMM') === month)
                  .sort((a, b) => (a.date > b.date ? -1 : 1))
                  .map((note, index) =>
                    <Note note={note} key={note.id} onDelete={this.onDelete} />
                  )}
              </div>
            );
          })}
        </UL>
      </Paper>
    );
  }
}
