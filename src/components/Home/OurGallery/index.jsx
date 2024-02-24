import { Img, Text } from "components";
import { Heading1 } from "components/Heading";

const OurGallery = () => {
  return (
    <div
      className='container-wrapper max-w-[1440px] w-[90%] mx-auto mt-20 '
    >
      <div
        className='our-gallery-container  '
      >
        <Heading1
          className={``}
          title={{
            title1: 'Our Gallery',
            className: 'text-center'
          }}
          description={{
            text: 'Lorem ipsum dolor sit amet, consectetur elit. will Pellentesque efficitur ac quam in congue.',
            className: 'text-center w-[80%] md:w-full mx-auto '
          }}
        />
        <div className='grid grid-cols-4 md:grid-cols-3 gap-4 md:gap-2 mt-10 md:mt-4'>        
          <Img
            className=" first-letter:md:h-auto object-cover rounded-[10px] col-span-2 row-span-2 md:col-span-[1/3] "
            src="images/img_rectangle45.png"
            alt="rectangleFortyFive"
          />
          <Img
            className=" md:h-auto object-cover rounded-[10px]"
            src="images/img_rectangle56.png"
            alt="rectangleFiftySix"
          />
          <Img
            className=" md:h-auto object-cover rounded-[10px] md:hidden "
            src="images/img_rectangle48.png"
            alt="rectangleFortyEight"
          />
          <Img
            className=" md:h-auto object-cover rounded-[10px] md:hidden "
            src="images/img_rectangle57.png"
            alt="rectangleFiftySeven"
          />
          <Img
            className=" md:h-auto object-cover rounded-[10px] md:hidden "
            src="images/img_rectangle54.png"
            alt="rectangleFiftyFour"
          />
          <Img
            className="md:h-auto object-cover rounded-[10px]"
            src="images/img_rectangle59.png"
            alt="rectangleFiftyNine"
          />
          <Img
            className=" md:h-auto object-cover rounded-[10px]"
            src="images/img_rectangle60.png"
            alt="rectangleSixty"
          />
          <Img
            className=" md:h-auto object-cover rounded-[10px]"
            src="images/img_rectangle58.png"
            alt="rectangleFiftyEight"
          />
          <Img
            className=" md:h-auto object-cover rounded-[10px]"
            src="images/img_rectangle55.png"
            alt="rectangleFiftyFive"
          /> 
        </div>       
      </div>
    </div>
  );
};
                


    //                 
    //               </div>
    //             </div>
    //           </div>
    //           <div className="flex sm:flex-col flex-row gap-[26px] items-center justify-between w-full">
    //             
    //             
    //             
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

export default OurGallery;
