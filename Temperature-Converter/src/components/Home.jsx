import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import style from './Home.module.css'
import { useState } from 'react';

const Home = () => {
  const [inputDegreeValue, setInputDegreeValue] = useState('');
  const [inputType, setInputType] = useState('');
  const [result, setResult] = useState('');
  const [resultType, setResultType] = useState('');

  const inputDegreeHandler = (e) => {
    setInputDegreeValue(e.target.value);
  }

  const inputTypeHandler = (e) => {
    setInputType(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (inputType === 'Fahrenheit') {
      const tempResult = ((inputDegreeValue - 32) * 5) / 9;
      setResult(tempResult);
      setResultType('Celsius');
    } else if (inputType === 'Celsius') {
      const tempResult = ((9 / 5) * inputDegreeValue) + 32;
      setResult(tempResult);
      setResultType('Fahrenheit');
    }
  }

  return (
    <div className={style.content}>
      <h3 className={style.app_title}>Temperature Converter</h3>
      <Form onSubmit={submitHandler}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Degrees</Form.Label>
            <Form.Control className={style.form_input} type="number" placeholder="Enter temperature" required onChange={inputDegreeHandler} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Type</Form.Label>
            <Form.Select className={style.form_input} defaultValue='Choose...' onChange={inputTypeHandler}>
              <option>Choose...</option>
              <option>Fahrenheit</option>
              <option>Celsius</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <div className={style.result_cont}>
          <Form.Label>Result</Form.Label>
          <div className={style.result}>{result}{' '}{resultType}</div>
        </div>

        <Button className={style.convert_btn} variant="primary" type="submit">
          Convert
        </Button>
      </Form>
    </div>
  );
}
 
export default Home;