import { useParams } from "react-router-dom";

const CategoryProducts = () => {

const { slug } = useParams();

return(

<div className="container mx-auto py-10">

<h1 className="text-3xl font-bold">
Products in {slug}
</h1>

</div>

);

};

export default CategoryProducts;