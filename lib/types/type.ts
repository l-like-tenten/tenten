export interface Card {
  id: number;
  title: string;
  description: string;
  tags: string[];
  dueDate: string;
  assignee: {
    profileImageUrl: string;
    nickname: string;
    id: number;
  };
  imageUrl?: string;
  teamId: string;
  columnId: number;
  createdAt: string;
  updatedAt: string;
}

export interface Cards {
  cursorId: number;
  totalCount: number;
  cards: Card[];
}

export interface Invite {
  id: number;
  inviterUserId: number;
  teamId: string;
  dashboard: {
    title: string;
    id: number;
  };
  invitee: {
    nickname: string;
    id: number;
  };
  inviteAccepted: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Invites {
  cursorId: number;
  invitations: Invite[];
}

export interface Members {
  members: Member[];
  totalCount: number;
}

export interface Member {
  id: number;
  userId: number;
  email: string;
  nickname: string;
  profileImageUrl: string;
  createdAt: string;
  updatedAt: string;
  isOwner: boolean;
}

export interface Comment {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  cardId: number;
  author: {
    profileImageUrl: string;
    nickname: string;
    id: number;
  };
}
