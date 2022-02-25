import Grid from './Grid'
import Header from './Header'
import Page from './Page'
import Restaurants from './Restaurants'

const Components = {
    grid: Grid,
    header: Header,
    page: Page,
    restaurants: Restaurants
};

const DynamicComponent = ({ blok }) => {
  // check if component is defined above
   if (typeof Components[blok.component] !== "undefined") {
    const Component = Components[blok.component];
 
    return <Component blok={blok} key={blok._uid} />;
   }
 
  // fallback if the component doesn't exist
  return (
    <p>
      The component <strong>{blok.component}</strong> has not been created yet.
    </p>
  );
};
 
export default DynamicComponent;
 

