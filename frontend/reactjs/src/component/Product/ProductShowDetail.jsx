/*
*
* */

import {useEffect, useState} from "react"
// import img from "next/image"
// import a from "next/a"
import { Heart, Search, ShoppingBag, Star, User, Minus, Plus, ChevronDown } from "lucide-react"
import axios from "axios";
import {useParams} from "react-router-dom";
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"

export default function ProductShowDetail() {
    const {id} = useParams()
    const [quantity, setQuantity] = useState(1)
    // const [cookies, setCookie, removeCookie] = useCookies(['loginToken', 'user']);
    const [product, setProduct] = useState([]);

    const fetchProductDetail = async () => {
        // const token = cookies.loginToken;
        const response = await axios.get('http://localhost:8000/api/product-detail/' + id, {
            // headers: { Authorization: `Bearer ${token}` },
        });
        setProduct(response.data.product);
    };

    // fetchData();
    useEffect(() => {
        fetchProductDetail();
    }, []);
    const [expandedSection, setExpandedSection] = useState("details")

    const incrementQuantity = () => {
        setQuantity(quantity + 1)
    }

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    const toggleSection = (section) => {
        if (expandedSection === section) {
            setExpandedSection(null)
        } else {
            setExpandedSection(section)
        }
    }

    return (
        <div className="max-w-7xl mx-auto px-4 pt-65 ">
            <div className="py-4 text-sm">
                <div className="flex items-center gap-2">
                    <a href="/" className="text-gray-500 hover:text-blue-800">
                        Home
                    </a>
                    <span className="text-gray-400">&gt;</span>
                    <a href="/Product" className="text-gray-500 hover:text-blue-800">
                        Products list
                    </a>
                    <span className="text-gray-400">&gt;</span>
                    <span className="text-gray-700">{product.name}</span>
                </div>
            </div>

            {/* Product Section */}
            <div className="grid md:grid-cols-2 gap-8 py-6">
                {/* Product img */}
                <div className="bg-yellow-300 rounded-lg overflow-hidden">
                    <img
                        src={product.image ?? 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}
                        alt="Pedigree Dog Food"
                        width={500}
                        height={500}
                        className="w-full h-auto object-contain"
                    />
                </div>

                {/* Product Info */}
                <div className="flex flex-col gap-4">
                    <h1 className="text-2xl font-bold text-blue-900">{product.name}</h1>

                    {/* Ratings */}
                    <div className="flex items-center gap-4">
                        <div className="flex items-center">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                            <span className="ml-2 text-sm font-medium">{product.name}</span>
                        </div>
                        <div className="text-sm text-gray-500">
                            <span>|</span>
                            <span className="ml-2">261 Lượt đánh giá</span>
                            <span className="ml-2">|</span>
                            <span className="ml-2">463 Lượt bán</span>
                        </div>
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-3">
                        <span className="text-xl font-bold text-orange-500">{product.new_price} USD</span>
                        <span className="text-sm text-gray-400 line-through">{product.old_price} USD</span>
                    </div>

                    {/* Delivery */}
                    <div className="flex items-center gap-2 text-sm">
                        <span className="text-gray-600">Thời gian vận chuyển:</span>
                        <span className="font-medium">01/01/2025 đến 08/01/2025</span>
                    </div>

                    {/* Quantity */}
                    <div className="flex items-center gap-4 mt-2">
                        <span className="text-gray-700">Quantity:</span>
                        <div className="flex items-center">
                            <button
                                onClick={decrementQuantity}
                                className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-l-md bg-gray-100"
                            >
                                <Minus className="w-4 h-4" />
                            </button>
                            <div className="w-10 h-8 flex items-center justify-center border-t border-b border-gray-300">
                                {quantity}
                            </div>
                            <button
                                onClick={incrementQuantity}
                                className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-r-md bg-gray-100"
                            >
                                <Plus className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-3 mt-4">
                        <button className="bg-blue-900 hover:bg-blue-800 text-white px-4 py-2 rounded flex items-center gap-2">
                            <ShoppingBag className="w-4 h-4" />
                            Add to cart
                        </button>
                        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded">Mua ngay</button>
                        <button variant="outline" className="border-gray-300 p-2 rounded-full">
                            <Heart className="w-5 h-5 text-gray-700" />
                        </button>
                    </div>

                    {/* Product Features */}
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="bg-yellow-100 p-4 rounded-lg">
                            <img
                                src={product.image ?? 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}
                                alt="Feeding Guide"
                                width={150}
                                height={150}
                                className="w-full h-auto"
                            />
                        </div>
                        <div className="bg-yellow-100 p-4 rounded-lg">
                            <img
                                src={product.image ?? 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}
                                alt="Product Benefits"
                                width={150}
                                height={150}
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Product Details Accordion */}
            <div className="border-t py-4">
                <div className="border rounded-md mb-4">
                    <button
                        className="w-full flex items-center justify-between p-4 text-left font-medium"
                        onClick={() => toggleSection("details")}
                    >
                        <div className="flex items-center gap-2">
                            <span className="text-blue-800 font-bold">•</span>
                            <span className="font-bold">Product Details</span>
                        </div>
                        <ChevronDown
                            className={`w-5 h-5 transition-transform ${expandedSection === "details" ? "transform rotate-180" : ""}`}
                        />
                    </button>

                    {expandedSection === "details" && (
                        <div className="p-4 pt-0 border-t">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="grid grid-cols-2 py-2 border-b">
                                    <span className="text-gray-600">Brand</span>
                                    <span className="font-medium text-blue-800">Pedigree</span>
                                </div>
                                <div className="grid grid-cols-2 py-2 border-b">
                                    <span className="text-gray-600">Pet type</span>
                                    <span className="font-medium">Dog</span>
                                </div>
                                <div className="grid grid-cols-2 py-2 border-b">
                                    <span className="text-gray-600">Origin</span>
                                    <span className="font-medium">Thailand</span>
                                </div>
                                <div className="grid grid-cols-2 py-2 border-b">
                                    <span className="text-gray-600">Weight</span>
                                    <span className="font-medium">5kg - 10kg</span>
                                </div>
                                <div className="grid grid-cols-2 py-2 border-b">
                                    <span className="text-gray-600">Stock quantity</span>
                                    <span className="font-medium">1000</span>
                                </div>
                                <div className="grid grid-cols-2 py-2 border-b">
                                    <span className="text-gray-600">Expiration date</span>
                                    <span className="font-medium">18 month</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="border rounded-md mb-4">
                    <button
                        className="w-full flex items-center justify-between p-4 text-left font-medium"
                        onClick={() => toggleSection("description")}
                    >
                        <div className="flex items-center gap-2">
                            <span className="text-blue-800 font-bold">•</span>
                            <span className="font-bold">Description</span>
                        </div>
                        <ChevronDown
                            className={`w-5 h-5 transition-transform ${expandedSection === "description" ? "transform rotate-180" : ""}`}
                        />
                    </button>

                    {expandedSection === "description" && (
                        <div className="p-4 pt-0 border-t">
                            <div className="text-sm text-gray-700 space-y-4">
                                <p>Thức Ăn Hạt Pedigree Cho Chó Trưởng Thành Vị Gà Rau Củ - Túi 1.5kg</p>
                                <p>
                                    Pedigree Vị Gà Rau Củ duy được tạo nên bằng tình yêu với những chú cún cưng. Đó cũng là lý do tại sao
                                    các công thức của Pedigree được dựa trên nghiên cứu từ Trung tâm Dinh Dưỡng Vật Nuôi WALTHAM™ giúp
                                    tăng cấp cho cún thưởng thức dậy đủ nhất.
                                </p>
                                <p className="font-medium">Đặc tính nổi bật:</p>
                                <ol className="list-decimal pl-5 space-y-1">
                                    <li>Chất chống oxy hóa và Dinh Dưỡng Toàn Diện & Cân Bằng, hỗ trợ hệ miễn dịch khỏe mạnh</li>
                                    <li>Omega 6 và Thiết Yếu cho Hệ Thống Cơ thể hoạt động hiệu quả</li>
                                    <li>Canxi & Phốt pho cho xương chắc khỏe</li>
                                    <li>Chất xơ tự nhiên hỗ trợ hoạt động hệ tiêu hóa</li>
                                    <li>Protein chất lượng cao giúp cơ bắp săn chắc giúp vận động bằng mạnh trong & ngoài</li>
                                    <li>Protein cao cấp cho sự bắp rắn chắc</li>
                                </ol>
                                <p className="font-medium">THÀNH PHẦN:</p>
                                <p>
                                    Bắp, Lúa mỳ, Bột lông vũ đã thủy phân, Dầu không nguyên dầu, Chất tạo hương, Dầu cọ, Khoáng chất, Thịt
                                    gà cám và phụ phẩm gà cám, Khô dầu đậu tương, Dầu đậu nành, Vitamin, Methionin, Chất tạo màu, Chất sơ,
                                    Chất chống oxy hóa, Cá rô phi khô 0.005%, Rice-Spinach-sấy khô 0.005%.
                                </p>
                            </div>
                        </div>
                    )}
                </div>

                <div className="border rounded-md">
                    <button
                        className="w-full flex items-center justify-between p-4 text-left font-medium"
                        onClick={() => toggleSection("reviews")}
                    >
                        <div className="flex items-center gap-2">
                            <span className="text-blue-800 font-bold">•</span>
                            <span className="font-bold">Reviews(1k2)</span>
                        </div>
                        <ChevronDown
                            className={`w-5 h-5 transition-transform ${expandedSection === "reviews" ? "transform rotate-180" : ""}`}
                        />
                    </button>

                    {expandedSection === "reviews" && (
                        <div className="p-4 pt-0 border-t">
                            <div className="flex gap-2 mb-4">
                                <Badge variant="outline" className="bg-blue-800 text-white">
                                    Tất cả
                                </Badge>
                                <Badge variant="outline" className="flex items-center gap-1">
                                    5 <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                </Badge>
                                <Badge variant="outline" className="flex items-center gap-1">
                                    4 <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                </Badge>
                                <Badge variant="outline" className="flex items-center gap-1">
                                    3 <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                </Badge>
                                <Badge variant="outline" className="flex items-center gap-1">
                                    2 <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                </Badge>
                                <Badge variant="outline" className="flex items-center gap-1">
                                    1 <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                </Badge>
                            </div>

                            {/* Review Items */}
                            <div className="space-y-6">
                                {/* Review 1 */}
                                <div className="border-b pb-4">
                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden">
                                            <img src="/placeholder.svg?height=40&width=40" alt="User" width={40} height={40} />
                                        </div>
                                        <div>
                                            <div className="font-medium">Nguyễn Ngọc Thảo Ngọt</div>
                                            <div className="flex items-center">
                                                {[1, 2, 3, 4, 5].map((star) => (
                                                    <Star key={star} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                                ))}
                                            </div>
                                            <p className="text-sm mt-2">
                                                Shop bán hàng chất lượng và giao khá là nhanh. Bài xả và mình mua thử lần thứ 3n mới đưa nhà
                                                mình và xem ra là khá là hợp. Mình sẽ tiếp tục ủng hộ shop trong tương lai nhé. Hết bài này mình
                                                sẽ mua tiếp, để dog ăn thay đổi đồ ăn.
                                            </p>
                                            <div className="flex gap-2 mt-2">
                                                <img
                                                    src="/placeholder.svg?height=60&width=60"
                                                    alt="Review img"
                                                    width={60}
                                                    height={60}
                                                    className="rounded-md"
                                                />
                                                <img
                                                    src="/placeholder.svg?height=60&width=60"
                                                    alt="Review img"
                                                    width={60}
                                                    height={60}
                                                    className="rounded-md"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Review 2 */}
                                <div className="border-b pb-4">
                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden">
                                            <img src="/placeholder.svg?height=40&width=40" alt="User" width={40} height={40} />
                                        </div>
                                        <div>
                                            <div className="font-medium">Minh Anh</div>
                                            <div className="flex items-center">
                                                {[1, 2, 3, 4, 5].map((star) => (
                                                    <Star key={star} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                                ))}
                                            </div>
                                            <p className="text-sm mt-2">
                                                Mình hay cho bé nhà ăn loại này mua nhiều lần rồi thấy ăn hợp, lại dễ ăn đồng ăn mãi k hết.
                                            </p>
                                            <div className="flex gap-2 mt-2">
                                                <img
                                                    src="/placeholder.svg?height=60&width=60"
                                                    alt="Review img"
                                                    width={60}
                                                    height={60}
                                                    className="rounded-md"
                                                />
                                                <img
                                                    src="/placeholder.svg?height=60&width=60"
                                                    alt="Review img"
                                                    width={60}
                                                    height={60}
                                                    className="rounded-md"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Similar Products */}
            <div className="py-6">
                <h2 className="text-xl font-bold mb-4">Like products</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Product 1 */}
                    <div className="border rounded-lg overflow-hidden">
                        <div className="h-48 bg-gray-100 relative">
                            <img
                                src={product.image ?? 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}
                                alt="Ganador Dog Food"
                                width={200}
                                height={200}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="font-medium text-blue-800">GANADOR Adult Roasted Chicken Flavor</h3>
                            <div className="flex items-center mt-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                ))}
                                <span className="text-xs ml-1">4.8</span>
                            </div>
                        </div>
                    </div>

                    {/* Product 2 */}
                    <div className="border rounded-lg overflow-hidden">
                        <div className="h-48 bg-gray-100 relative">
                            <img
                                src={product.image ?? 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}
                                alt="Ganador Dog Food"
                                width={200}
                                height={200}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="font-medium text-blue-800">Ganador Adult Dog Food, Lamb & Rice Flavor</h3>
                            <div className="flex items-center mt-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                ))}
                                <span className="text-xs ml-1">4.9</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

