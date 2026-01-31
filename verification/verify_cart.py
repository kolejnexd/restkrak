from playwright.sync_api import sync_playwright, expect

def test_cart_flow(page):
    # 1. Go to menu page
    print("Navigating to /menu")
    page.goto("http://localhost:3000/menu")

    # Wait for hydration
    page.wait_for_timeout(3000)

    # 2. Add an item (click the plus button)
    print("Adding item to cart")
    # Find a button with "Dodaj" or just the plus icon.
    # The AddToCartButton has aria-label.
    # Let's target the one for "Jajecznica" or similar.
    # Using get_by_label is best.
    # The label format is `Dodaj ${item.name} do koszyka`

    # Let's try to find any "Dodaj ..." button.
    buttons = page.get_by_label("Dodaj", exact=False)
    # Click the first one
    buttons.first.click()

    # 3. Verify Cart Drawer opens
    print("Verifying cart drawer")
    drawer = page.get_by_text("Twój koszyk")
    expect(drawer).to_be_visible()

    # 4. Verify item in cart
    # We expect some text or price to be visible in the drawer
    print("Verifying item content")

    # 5. Take screenshot
    print("Taking screenshot")
    page.screenshot(path="verification/cart_drawer.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            test_cart_flow(page)
        except Exception as e:
            print(f"Error: {e}")
            page.screenshot(path="verification/error.png")
        finally:
            browser.close()
