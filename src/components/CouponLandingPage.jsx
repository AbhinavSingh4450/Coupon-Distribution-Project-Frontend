import { useState, useEffect } from "react";
import axios from "axios";
import { Gift, AlertCircle, CheckCircle2 } from 'lucide-react';
import { BASE_URL } from "../utils/constants";

const CouponLandingPage=()=> {
    const [coupons, setCoupons] = useState([]);
    const [claimedCoupon, setClaimedCoupon] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchCoupons();
    }, []);

    const fetchCoupons = async () => {
        try {
            const response = await axios.get(BASE_URL+"/api/coupons/available");
            setCoupons(response.data);
        } catch (err) {
            setError("Failed to fetch coupons.");
        }
    };

    const claimCoupon = async () => {
        try {
            const response = await axios.post( BASE_URL+ "/api/coupons/claim");
            setClaimedCoupon(response.data.coupon);
            fetchCoupons(); // Refresh available coupons
        } catch (err) {
            setError(err.response?.data?.message || "Failed to claim coupon.");
        }
    };
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-6 text-gray-100">
            <div className="w-full max-w-md">
                {/* Header Section */}
                <div className="flex items-center justify-center mb-8">
                    <Gift className="w-8 h-8 text-purple-400 mr-3" />
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Claim Your Coupons
                    </h1>
                </div>

                {/* Notifications */}
                {claimedCoupon && (
                    <div className="flex items-center bg-green-900/50 text-green-400 p-4 mb-6 rounded-lg border border-green-700/50 backdrop-blur-sm">
                        <CheckCircle2 className="w-5 h-5 mr-2 flex-shrink-0" />
                        <span>
                            Successfully claimed: <strong>{claimedCoupon}</strong>
                        </span>
                    </div>
                )}

                {error && (
                    <div className="flex items-center bg-red-900/50 text-red-400 p-4 mb-6 rounded-lg border border-red-700/50 backdrop-blur-sm">
                        <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                        <span>{error}</span>
                    </div>
                )}

                {/* Main Action Button */}
                <button 
                    onClick={claimCoupon}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold
                             transition-all duration-200 ease-in-out hover:from-purple-600 hover:to-pink-600 
                             focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900
                             active:scale-98 mb-8">
                    Claim Random Coupon
                </button>

                {/* Available Coupons Section */}
                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 backdrop-blur-sm">
                    <h2 className="text-xl font-semibold mb-4 text-gray-200">
                        Available Coupons
                    </h2>
                    {coupons.length > 0 ? (
                        <div className="space-y-3">
                            {coupons.map((coupon) => (
                                <div 
                                    key={coupon._id}
                                    className="bg-gray-700/50 p-4 rounded-lg border border-gray-600/50
                                             flex items-center justify-between group hover:bg-gray-700/70
                                             transition-all duration-200 ease-in-out">
                                    <span className="font-mono text-lg text-gray-200">
                                        {coupon.code}
                                    </span>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-400 text-center py-4">
                            No coupons available at the moment
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
export default CouponLandingPage