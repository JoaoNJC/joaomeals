import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Ready to be Delivered!</h2>
      <p>
        An assortment of mouth-watering meals, please be ready to order as much as your belly is satisfied. We are one click away from delivering the highlight of your week!
      </p>
    </section>
  );
};

export default MealsSummary;