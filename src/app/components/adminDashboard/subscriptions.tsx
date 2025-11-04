
"use client";

import React, { useState } from 'react';
import { Edit, Lock, CheckCircle } from 'lucide-react';
import { useCreatePlanMutation, useUpdatePlanMutation } from '@/redux/api/planApi';
import { useGetMe } from '@/hooks/useGetMe';

export default function SubscriptionPlan() {
  const [isCreateMode, setIsCreateMode] = useState(false);
  const [editingPlanId, setEditingPlanId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    plan: '',
    words: '',
    price: ''
  });

  const [createPlan] = useCreatePlanMutation();
  const [updatePlan] = useUpdatePlanMutation();
  const { user } = useGetMe();

  // Static features for all plans
  const staticFeatures = [
    'Complete, professionally written life story',
    'Beautifully formatted PDF download',
    'Unlimited access to your story',
    'Share with family and friends'
  ];

  // Mock existing plans from API
  const [plans, setPlans] = useState([
    {
      id: '873260fc-dabe-4491-a051-f479f14c95f8',
      name: 'Basic',
      words: 1500,
      amount: 15
    },
    {
      id: '873260fc-dabe-4491-a051-f479f14c95f9',
      name: 'Standard',
      words: 3000,
      amount: 15
    },
    {
      id: '873260fc-dabe-4491-a051-f479f14c95fa',
      name: 'Premium',
      words: 5000,
      amount: 15
    }
  ]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleEditPlan = (plan: any) => {
    setEditingPlanId(plan.id);
    setIsCreateMode(false);
    setFormData({
      plan: plan.name.toLowerCase(),
      words: plan.words.toString(),
      price: plan.amount.toString()
    });
  };

  const handleCreateNew = () => {
    setIsCreateMode(true);
    setEditingPlanId(null);
    setFormData({
      plan: '',
      words: '',
      price: ''
    });
  };

  const handleUpdate = async () => {
    if (!editingPlanId) return;

    // Prepare data for API UPDATE
    const apiData = {
      name: formData.plan.toUpperCase(),
      words: parseInt(formData.words),
      amount: parseFloat(formData.price)
    };


  try {
    // Call the mutation trigger with the payload and await the returned promise's unwrap
    const res = await updatePlan({ id: editingPlanId, data: apiData }).unwrap();
    console.log('Update response:', res);
  } catch (error) {
    console.error('Failed to update plan:', error);
  }
    console.log('Updating Plan ID:', editingPlanId);
    console.log('Update Data:', JSON.stringify(apiData, null, 2));
    
    // RTK Query API call here
    // dispatch(updatePlan({ id: editingPlanId, data: apiData }))
    
    // Reset form
    setEditingPlanId(null);
    setFormData({
      plan: '',
      words: '',
      price: ''
    });
  };

  const handleCreatePlan = async () => {
    // Prepare data for API CREATE
    const apiData = {
      name: formData.plan.toUpperCase(),
      words: parseInt(formData.words),
      amount: parseFloat(formData.price)
    };

    try {
      // Call the mutation trigger with the payload and await the returned promise's unwrap
      const res = await createPlan(apiData).unwrap();
      console.log('Create response:', res);
    } catch (error) {
      console.error('Failed to create plan:', error);
    }

    console.log('Creating New Plan:', JSON.stringify(apiData, null, 2));
    
    // RTK Query API call here
    // dispatch(createPlan(apiData))
    
    // Reset form
    setIsCreateMode(false);
    setFormData({
      plan: '',
      words: '',
      price: ''
    });
  };
  console.log("User in SubscriptionPlan:", user);

  const handleCancel = () => {
    setIsCreateMode(false);
    setEditingPlanId(null);
    setFormData({
      plan: '',
      words: '',
      price: ''
    });
  };

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Subscription</h1>
            <p className="text-gray-600">Manage your subscription Plan</p>
          </div>
          {!isCreateMode && !editingPlanId && (
            <button
              onClick={handleCreateNew}
              className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium px-6 py-2.5 rounded-lg transition-colors"
            >
              <Edit className="w-4 h-4" />
              Create New Plan
            </button>
          )}
        </div>

        {/* Form Section - Show only when creating or editing */}
        {(isCreateMode || editingPlanId) && (
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {editingPlanId ? 'Edit Plan' : 'Create New Plan'}
            </h2>
            
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
                <option value="">Plan</option>
                <option value="basic">Basic</option>
                <option value="standard">Standard</option>
                <option value="premium">Premium</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Select your word
              </label>
              <select
                name="words"
                value={formData.words}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select word</option>
                <option value="1500">1,500</option>
                <option value="3000">3,000</option>
                <option value="5000">5,000</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Price
              </label>
              <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                placeholder="Enter your price"
                className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
              />
            </div>

            <div className="flex justify-center gap-4">
              <button
                onClick={handleCancel}
                className="bg-gray-200 hover:bg-gray-300 text-gray-900 font-medium px-8 py-3 rounded-lg transition-colors"
              >
                Cancel
              </button>
              {editingPlanId ? (
                <button
                  onClick={handleUpdate}
                  className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium px-8 py-3 rounded-lg transition-colors"
                >
                  Update Plan
                </button>
              ) : (
                <button
                  onClick={handleCreatePlan}
                  className="bg-[#314B79] hover:bg-blue-800 text-white font-medium px-8 py-3 rounded-lg transition-colors"
                >
                  Create Plan
                </button>
              )}
            </div>
          </div>
        )}

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="bg-[#314B79] rounded-lg p-6 text-white relative"
            >
              {/* Edit Button on Card */}
              <button
                onClick={() => handleEditPlan(plan)}
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
              <p className="text-lg font-semibold mb-2">{plan.words.toLocaleString()} Words</p>
              <p className="text-sm text-blue-200 mb-4">What You&#39;ll Get</p>

              <div className="space-y-3 mb-6">
                {staticFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
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