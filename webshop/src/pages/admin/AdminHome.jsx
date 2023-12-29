import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function AdminHome() {
  const { t } = useTranslation();

  return (
    <div>
      {/* <h1>{t('Welcome to React')}</h1> */}
      <Button as={Link} to="/admin/categories" variant="primary">{t("maintain-categories")}</Button>{' '}
      <Button as={Link} to="/admin/shops" variant="secondary">{t("maintain-shops")}</Button>{' '}
      <Button as={Link} to="/admin/add" variant="success">{t("add-product")}</Button>{' '}
      <Button as={Link} to="/admin/products" variant="warning">{t("maintain-products")}</Button>{' '}
    </div>
  )
}

export default AdminHome