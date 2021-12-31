import { $isError, openErrorMessage, closeErrorMessage } from './index';

$isError
    .on(openErrorMessage, () => true)
    .on(closeErrorMessage, () => false);