import crypto from 'crypto';

// Helper function to create the hash string
export function createHashString({
    merchantId,
    merchantOrderId,
    amount,
    okUrl,
    failUrl,
    username,
    hashPassword
}: {
    merchantId: any;
    merchantOrderId: string;
    amount: number;
    okUrl: string;
    failUrl: string;
    username: string;
    hashPassword: string;
}): string {
    //   return `${merchantId}|${merchantOrderId}|${amount}|${okUrl}|${failUrl}|${username}|${hashPassword}`;
    return `${merchantId}${merchantOrderId}${amount}${okUrl}${failUrl}${username}${hashPassword}`;
}

// Helper function to compute the hash (you can adjust the hashing algorithm based on your needs)
export function computeHash(hashString: string): string {
    // return crypto.createHash('sha256').update(hashString).digest('hex');
    return crypto.createHash('sha1').update(hashString).digest('base64');
}