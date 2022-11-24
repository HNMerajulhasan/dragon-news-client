import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../../SharedPage/CourseSummryCard/CourseSummaryCard';


const Category = () => {
   const categoryNews=useLoaderData(); 
    return (
        <div>
            {/* <h2>This Category has :{categoryNews.length}</h2> */}
            {
              categoryNews.map(news=><CourseSummaryCard
                key={news._id}
                news={news}
            ></CourseSummaryCard>
              
              )  
            }
        </div>
    );
};

export default Category;

