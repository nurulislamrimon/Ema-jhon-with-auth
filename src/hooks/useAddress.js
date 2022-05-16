import React, { useState } from 'react';

const useAddress = () => {
    const [addressData, setAddressData] = useState({});
    return [addressData, setAddressData];
};

export default useAddress;