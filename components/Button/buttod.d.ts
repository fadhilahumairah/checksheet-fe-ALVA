type GuideSchema = {
  border: string;
  width: string;
  color: string;
  hover: string;
  text: string;
  borderColor: string;
};

interface StyleGuideSchema {
  [key: string]: GuideSchema;
}

interface ButtonRistekProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type: primary | secondary | warning | ghost | submitted;
  color?: string;
  hover?: string;
  additionStyle?: string;
  to?: string;
  disabled?: boolean;
  padding?: string;
  children?: any;
}

interface InvButtonTypes {
  count: string;
  to: string;
}
