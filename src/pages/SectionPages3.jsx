import furniture31 from "../../public/assets/images/31.png"
import furniture32 from "../../public/assets/images/32.png"
import furniture33 from "../../public/assets/images/33.png"
import furniture34 from "../../public/assets/images/34.png"
import furniture35 from "../../public/assets/images/35.png"
import furniture27 from "../../public/assets/images/27.png"
import furniture41 from "../../public/assets/images/41.png"
import furniture42 from "../../public/assets/images/42.png"
import furniture43 from "../../public/assets/images/43.png"
import furniture44 from "../../public/assets/images/44.png"
import { FaRegHeart, FaStar, FaStarHalfAlt } from "react-icons/fa"
import { FaAnglesDown, FaBasketShopping } from "react-icons/fa6"
import CategoryList from "../components/elements/CategoryList"
import ProductCard from "../components/elements/ProductCard"
import ProductStars from "../components/elements/ProducStars"
export default function SectionPages3() {
    return (
        <div className="w-full">
            <div className="w-full mt-10 p-[35px] bg-[url('../../public/assets/images/bg3.png')] bg-cover flex flex-col justify-center items-center font-poppins">
                <h1 className="text-[2.7rem] font-semibold">Categories</h1>
                <p className="mt-5 text-[19px] w-1/2 text-center">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, non
                </p>
                <div className="mt-20 flex justify-center items-center gap-[5px]">
                    <CategoryList>
                        <CategoryList.Image image={furniture31}/>
                        <CategoryList.Desc type={'Chairs'} many={'73'}/>
                    </CategoryList>
                    <CategoryList>
                        <CategoryList.Image image={furniture32}/>
                        <CategoryList.Desc type={'Tables'} many={'93'}/>
                    </CategoryList>
                    <CategoryList>
                        <CategoryList.Image image={furniture33}/>
                        <CategoryList.Desc type={'Table Lamps'} many={'33'}/>
                    </CategoryList>
                    <CategoryList>
                        <CategoryList.Image image={furniture34}/>
                        <CategoryList.Desc type={'Sofas'} many={'46'}/>
                    </CategoryList>
                    <CategoryList>
                        <CategoryList.Image image={furniture35}/>
                        <CategoryList.Desc type={'Bed'} many={'68'}/>
                    </CategoryList>
                    <CategoryList>
                        <CategoryList.Image image={furniture27}/>
                        <CategoryList.Desc type={'Antiques'} many={'268'}/>
                    </CategoryList>
                    <CategoryList>
                        {/* <CategoryList.Image image={furniture27}/> */}
                        <CategoryList.Desc type={'See All'} many={'4645'}/>
                    </CategoryList>
                    
                    {/* <div className="w-[13%] h-[12vh] p-[8px] flex justify-center items-center border-[2px] border-[#598fa7] rounded-full bg-white">
                        <div className="w-auto flex flex-col justify-center items-center">
                            <h4 className="text-base font-semibold">See All</h4>
                            <p className="mt-0 text-left text-sm w-full">4645 Products</p>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className="w-full p-[50px] flex flex-col justify-center items-center font-poppins">
                <h1 className="text-[2.7rem] font-semibold">Best Selling Products</h1>
                <p className="mt-5 text-[19px] w-1/2 text-center">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
                    officia voluptate quas
                </p>
                <div className="mt-[55px] flex justify-center items-center gap-5">
                    <ProductCard>
                        <ProductCard.Image image={furniture41}/>
                        <ProductCard.Title title={'High Back Desk Chair'}/>
                        <ProductCard.Desc description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, iure."}/>
                        <ProductStars/>
                        <ProductCard.Rate eye={'4.5'} view={'50 Reviews'}/>
                        <ProductCard.Price price={'$39.99'}/>
                    </ProductCard>
                    <ProductCard>
                        <ProductCard.Image image={furniture42}/>
                        <ProductCard.Title title={'all Dresser with 8 Drawers'}/>
                        <ProductCard.Desc description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, iure."}/>
                        <ProductStars/>
                        <ProductCard.Rate eye={'4.5'} view={'50 Reviews'}/>
                        <ProductCard.Price price={'$39.99'}/>
                    </ProductCard>
                    <ProductCard>
                        <ProductCard.Image image={furniture43}/>
                        <ProductCard.Title title={'Couch Cover 3 Pieces'}/>
                        <ProductCard.Desc description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, iure."}/>
                        <ProductStars/>
                        <ProductCard.Rate eye={'4.5'} view={'50 Reviews'}/>
                        <ProductCard.Price price={'$39.99'}/>
                    </ProductCard>
                    <ProductCard>
                        <ProductCard.Image image={furniture44}/>
                        <ProductCard.Title title={'Side Table & Drawer'}/>
                        <ProductCard.Desc description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, iure."}/>
                        <ProductStars/>
                        <ProductCard.Rate eye={'4.5'} view={'50 Reviews'}/>
                        <ProductCard.Price price={'$39.99'}/>
                    </ProductCard>
                    
                </div>
                <div className="mt-[30px]">
                <button className="py-[5px] px-5 bg-transparent border-[2px] border-[#598fa7] rounded-[5px] text-sm text-[#598fa7] font-bold font-poppins flex items-center">
                    See More
                    <FaAnglesDown className="fa-solid fa-angles-down ml-1" />
                </button>
            </div>
            </div>
        </div>
    )
}