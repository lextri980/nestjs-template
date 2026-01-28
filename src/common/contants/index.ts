// [Const] Role of user
export const USER_ROLE = {
  ADMIN: 0, // Admin
  USER: 1, // Normal user
};

// [Const] Role of room member
export const ROOM_MEMBER_ROLE = {
  ADMIN: 0, // Room admin
  MEMBER: 1, // Room member
  DIRECT: 2, // Room with 2 members direct message to each other
};

// [Const] Join status of room member
export const ROOM_MEMBER_JOIN_STATUS = {
  BANNED: 0, // When be banned by admin & the room still exists
  JOINED: 1, // When be invited & accepted
  PENDING: 2, // When be invited & not accept yet
};

// [Const] JWT error
export const JWT_ERROR = {
  INVALID: 'invalid signature', // Invalid JWT access token
  EXPIRED: 'jwt expired', // JWT access token expired
};
