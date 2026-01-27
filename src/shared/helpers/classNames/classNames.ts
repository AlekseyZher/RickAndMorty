type ClassValue =
  | string
  | number
  | null
  | undefined
  | boolean
  | ClassArray
  | ClassDictionary;
interface ClassDictionary {
  [key: string]: boolean | undefined | null;
}
type ClassArray = ClassValue[];

export function classNames(...args: ClassValue[]): string {
  const classes: string[] = [];

  const flatten = (arg: ClassValue): void => {
    if (typeof arg === 'string' || typeof arg === 'number') {
      classes.push(arg.toString());
    } else if (Array.isArray(arg)) {
      arg.forEach(flatten);
    } else if (arg !== null && typeof arg === 'object') {
      Object.keys(arg).forEach((key) => {
        if (arg[key]) {
          classes.push(key);
        }
      });
    }
  };

  args.forEach((arg) => {
    if (arg) {
      flatten(arg);
    }
  });

  return classes.join(' ');
}
