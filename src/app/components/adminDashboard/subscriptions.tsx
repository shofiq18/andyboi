









"use client";
import React, { useState, } from "react";
import { Edit, Lock, CheckCircle } from "lucide-react";
import {
  useCreatePlanMutation,
  useGetAllAdminPlansQuery,
  useUpdatePlanMutation,
} from "@/redux/api/planApi";
import { useGetMe } from "@/hooks/useGetMe";

export default function SubscriptionPlan() {
  const [isCreateMode, setIsCreateMode] = useState(false);
  const [editingPlanId, setEditingPlanId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    plan: "",
    words: "",
    price: "",
  });

  const [createPlan, { isLoading: creating }] = useCreatePlanMutation();
  const [updatePlan, { isLoading: updating }] = useUpdatePlanMutation();

  const {
    data: plansResponse,
    isLoading: loadingPlans,
    error: plansError,
    refetch,
  } = useGetAllAdminPlansQuery();

  const { user } = useGetMe();

  // Real plans from API
  const plans = plansResponse?.data ?? [];

  // Static features (same for every plan)
  const staticFeatures = [
    "Complete, professionally written life story",
    "Beautifully formatted PDF download",
    "Unlimited access to your story",
    "Share with family and friends",
  ];

  // -----------------------------------------------------------------
  // Form helpers
  // -----------------------------------------------------------------
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData({ plan: "", words: "", price: "" });
    setIsCreateMode(false);
    setEditingPlanId(null);
  };

  // -----------------------------------------------------------------
  // Edit / Create mode
  // -----------------------------------------------------------------
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const startEdit = (plan: any) => {
    setEditingPlanId(plan.id);
    setIsCreateMode(false);
    setFormData({
      plan: plan.name.toLowerCase(),
      words: plan.words.toString(),
      price: plan.amount.toString(),
    });
  };

  const startCreate = () => {
    setIsCreateMode(true);
    setEditingPlanId(null);
    setFormData({ plan: "", words: "", price: "" });
  };

  // -----------------------------------------------------------------
  // API calls
  // -----------------------------------------------------------------
  const handleCreate = async () => {
    const payload = {
      name: formData.plan.toUpperCase(),
      words: parseInt(formData.words),
      amount: parseFloat(formData.price),
    };

    try {
      await createPlan(payload).unwrap();
      resetForm();
      refetch(); // optional – RTK Query auto-refetches via invalidatesTags
    } catch (err) {
      console.error("Create failed:", err);
    }
  };

  const handleUpdate = async () => {
    if (!editingPlanId) return;

    const payload = {
      name: formData.plan.toUpperCase(),
      words: parseInt(formData.words),
      amount: parseFloat(formData.price),
    };

    try {
      await updatePlan({ id: editingPlanId, data: payload }).unwrap();
      resetForm();
      refetch();
    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  // -----------------------------------------------------------------
  // Render
  // -----------------------------------------------------------------
  if (loadingPlans) return <div className="p-6 text-center">Loading plans…</div>;
  if (plansError)
    return <div className="p-6 text-center text-red-600">Failed to load plans.</div>;

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Subscription
            </h1>
            <p className="text-gray-600">Manage your subscription Plan</p>
          </div>

          {!isCreateMode && !editingPlanId && (
            <button
              onClick={startCreate}
              className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium px-6 py-2.5 rounded-lg transition-colors"
            >
              <Edit className="w-4 h-4" />
              Create New Plan
            </button>
          )}
        </div>

        {/* ---------- Form (Create / Edit) ---------- */}
        {(isCreateMode || editingPlanId) && (
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {editingPlanId ? "Edit Plan" : "Create New Plan"}
            </h2>

            {/* Plan name */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Choose your plan
              </label>
              <select
                name="plan"
                value={formData.plan}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select plan</option>
                <option value="basic">Basic</option>
                <option value="standard">Standard</option>
                <option value="premium">Premium</option>
              </select>
            </div>

            {/* Words */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Select word count
              </label>
              <select
                name="words"
                value={formData.words}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select words</option>
                <option value="1500">1,500</option>
                <option value="3000">3,000</option>
                <option value="5000">5,000</option>
              </select>
            </div>

            {/* Price */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Price
              </label>
              <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                placeholder="Enter price"
                className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-center gap-4">
              <button
                onClick={resetForm}
                className="bg-gray-200 hover:bg-gray-300 text-gray-900 font-medium px-8 py-3 rounded-lg transition-colors"
              >
                Cancel
              </button>

              {editingPlanId ? (
                <button
                  onClick={handleUpdate}
                  disabled={updating}
                  className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium px-8 py-3 rounded-lg transition-colors disabled:opacity-70"
                >
                  {updating ? "Updating…" : "Update Plan"}
                </button>
              ) : (
                <button
                  onClick={handleCreate}
                  disabled={creating}
                  className="bg-[#314B79] hover:bg-blue-800 text-white font-medium px-8 py-3 rounded-lg transition-colors disabled:opacity-70"
                >
                  {creating ? "Creating…" : "Create Plan"}
                </button>
              )}
            </div>
          </div>
        )}

        {/* ---------- Pricing Cards ---------- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="bg-[#314B79] rounded-lg p-6 text-white relative"
            >
              {/* Edit button */}
              <button
                onClick={() => startEdit(plan)}
                className="absolute top-4 right-4 bg-yellow-500 hover:bg-yellow-600 text-gray-900 p-2 rounded-lg transition-colors"
                title="Edit Plan"
              >
                <Edit className="w-4 h-4" />
              </button>

              <h3 className="text-2xl font-bold mb-3">{plan.name}</h3>
              <div className="mb-1">
                <span className="text-4xl font-bold">${plan.amount}</span>
                <span className="text-sm text-blue-200 ml-2">One-time</span>
              </div>
              <p className="text-lg font-semibold mb-2">
                {plan.words.toLocaleString()} Words
              </p>
              <p className="text-sm text-blue-200 mb-4">What You&apos;ll Get</p>

              <div className="space-y-3 mb-6">
                {staticFeatures.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-300 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium py-3 rounded-lg flex items-center justify-center gap-2 transition-colors">
                <Lock className="w-4 h-4" />
                Generate Your Story - ${plan.amount}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}