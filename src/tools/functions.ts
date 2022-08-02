import React from 'react';

export function useTitle(title: string): void {
  React.useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    return () => {
      document.title = prevTitle;
    };
  }, []);
}

function filterObjectByKey(json, key) {
	let res;
	Object.keys(json)
		.filter((k) => k == key)
		.forEach((k) => Object.assign(res, {[k]: json[k]}))
	return res;
}