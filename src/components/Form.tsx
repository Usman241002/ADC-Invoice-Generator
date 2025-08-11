export default function Form() {
  return <></>;
}


{/*<div className="w-1/2 bg-white shadow-lg overflow-y-auto">
          <div className="p-6">
            <div className="flex items-center gap-2 mb-6 pb-4 border-b">
              <DollarSign className="text-blue-600" size={28} />
              <h1 className="text-2xl font-bold text-gray-800">Invoice Generator</h1>
            </div>

            {/* Company Information
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                Company Information
              </h2>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Company Name"
                  value={companyInfo.name}
                  onChange={(e) => setCompanyInfo({...companyInfo, name: e.target.value})}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <input
                  type="text"
                  placeholder="Address"
                  value={companyInfo.address}
                  onChange={(e) => setCompanyInfo({...companyInfo, address: e.target.value})}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <input
                  type="text"
                  placeholder="City, State ZIP"
                  value={companyInfo.city}
                  onChange={(e) => setCompanyInfo({...companyInfo, city: e.target.value})}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  value={companyInfo.phone}
                  onChange={(e) => setCompanyInfo({...companyInfo, phone: e.target.value})}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={companyInfo.email}
                  onChange={(e) => setCompanyInfo({...companyInfo, email: e.target.value})}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <input
                  type="text"
                  placeholder="Website"
                  value={companyInfo.website}
                  onChange={(e) => setCompanyInfo({...companyInfo, website: e.target.value})}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Client Information */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Client Information</h2>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Client Name"
                  value={clientInfo.name}
                  onChange={(e) => setClientInfo({...clientInfo, name: e.target.value})}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <input
                  type="text"
                  placeholder="Client Address"
                  value={clientInfo.address}
                  onChange={(e) => setClientInfo({...clientInfo, address: e.target.value})}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <input
                  type="text"
                  placeholder="City, State ZIP"
                  value={clientInfo.city}
                  onChange={(e) => setClientInfo({...clientInfo, city: e.target.value})}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <input
                  type="email"
                  placeholder="Client Email"
                  value={clientInfo.email}
                  onChange={(e) => setClientInfo({...clientInfo, email: e.target.value})}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Invoice Details */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Invoice Details</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Invoice Number</label>
                  <input
                    type="text"
                    value={invoiceDetails.number}
                    onChange={(e) => setInvoiceDetails({...invoiceDetails, number: e.target.value})}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Payment Terms</label>
                  <select
                    value={invoiceDetails.terms}
                    onChange={(e) => setInvoiceDetails({...invoiceDetails, terms: e.target.value})}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option>Net 30</option>
                    <option>Net 15</option>
                    <option>Net 7</option>
                    <option>Due on Receipt</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Invoice Date</label>
                  <input
                    type="date"
                    value={invoiceDetails.date}
                    onChange={(e) => setInvoiceDetails({...invoiceDetails, date: e.target.value})}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Due Date</label>
                  <input
                    type="date"
                    value={invoiceDetails.dueDate}
                    onChange={(e) => setInvoiceDetails({...invoiceDetails, dueDate: e.target.value})}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Items */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Items</h2>
                <button
                  onClick={addItem}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center gap-2 text-sm"
                >
                  <Plus size={16} />
                  Add Item
                </button>
              </div>

              <div className="space-y-3">
                {items.map((item, index) => (
                  <div key={index} className="border rounded-lg p-4 bg-gray-50">
                    <div className="space-y-3">
                      <input
                        type="text"
                        placeholder="Description"
                        value={item.description}
                        onChange={(e) => updateItem(index, 'description', e.target.value)}
                        className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                      <div className="grid grid-cols-4 gap-2">
                        <div>
                          <label className="block text-xs text-gray-600 mb-1">Quantity</label>
                          <input
                            type="number"
                            value={item.quantity}
                            onChange={(e) => updateItem(index, 'quantity', parseFloat(e.target.value) || 0)}
                            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-gray-600 mb-1">Rate ($)</label>
                          <input
                            type="number"
                            step="0.01"
                            value={item.rate}
                            onChange={(e) => updateItem(index, 'rate', parseFloat(e.target.value) || 0)}
                            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-gray-600 mb-1">Amount</label>
                          <input
                            type="text"
                            value={`$${item.amount.toFixed(2)}`}
                            readOnly
                            className="w-full p-2 border rounded bg-gray-100"
                          />
                        </div>
                        <div className="flex items-end">
                          <button
                            onClick={() => removeItem(index)}
                            className="w-full p-2 text-red-600 hover:bg-red-100 rounded"
                            title="Remove item"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Totals Summary */}
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax (10%):</span>
                    <span className="font-medium">${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-base font-bold border-t pt-1">
                    <span>Total:</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Notes */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Notes</h2>
              <textarea
                placeholder="Additional notes or terms..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows="3"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Download Button */}
            <div className="sticky bottom-0 bg-white pt-4 border-t">
              <button className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2 font-medium">
                <Download size={18} />
                Download PDF
              </button>
            </div>
          </div>
        </div>
          */}
