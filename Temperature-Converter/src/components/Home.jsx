import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import style from './Home.module.css'

const Home = () => {
  return (
    <div className={style.content}>
      <h3 className={style.app_title}>Temperature Converter</h3>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Degrees</Form.Label>
            <Form.Control className={style.form_input} type="number" placeholder="Enter temperature" required />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Type</Form.Label>
            <Form.Select className={style.form_input} defaultValue="Fahrenheit">
              <option>Fahrenheit</option>
              <option>Celsius</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <div className={style.result_cont}>
          <Form.Label>Result</Form.Label>
          <div className={style.result}></div>
        </div>

        <Button className={style.convert_btn} variant="primary" type="submit">
          Convert
        </Button>
      </Form>
    </div>
  );
}
 
export default Home;