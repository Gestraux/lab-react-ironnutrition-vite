import { Card, Col, Button } from "antd";

// Iteration 2
function FoodBox(props) {
  const { name, image, calories, servings } = props.food;
  const { handleDelete } = props;

  return (
    <Col>
      <Card title={name} style={{ width: 200, height: 250, margin: 5 }}>
        <img src={image} height={60} alt={name} />
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p>
          <b>
            Total Calories: {calories} * {servings}{" "}
          </b>{" "}
          kcal
        </p>
        <Button type="primary" onClick={() => handleDelete(name)}>
          {" "}
          Delete{" "}
        </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;