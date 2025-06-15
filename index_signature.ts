type index_signatureType = {
    id: number;
    username: string;
   [key: string]: string | number | boolean | null;
//    readonly [key: string]: string | number | boolean | null;
};

const userSignature: index_signatureType = {
    id: 1,
    username: "john_doe",
    email: "exmale@gmail.com",
    age: 30,
    isActive: true,
    address: null,
    // Additional properties can be added dynamically
    phone: "123-456-7890",
    occupation: "Software Engineer"
};

// userSignature.email = "example@gmail.com";