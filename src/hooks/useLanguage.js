import { useEffect, useState } from 'react';
import { useLocation } from '@reach/router';

const useLanguage = () => {
    const location = useLocation();

    const languagePrefix = _getLanguagePrefix(location);

    const lang = _getLanguage(location);

    const dir = _getTextDirection(location);

    return {
        languagePrefix,
        lang,
        dir,
    }
};

const _getLanguage = (location) => {
    if (location.pathname.includes('/ar/')) {
        return 'ar-KW';
    }
    else {
        return 'en';
    }
}

const _getLanguagePrefix = (location) => {
    if (location.pathname.includes('/ar/')) {
        return '/ar';
    }
    else {
        return '';
    }
}

const _getTextDirection = (location) => {
    if (location.pathname.includes('/ar/')) {
        return 'rtl';
    }
    else {
        return 'ltr';
    }
}

export { useLanguage };
